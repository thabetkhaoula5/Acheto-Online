# start.ps1
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting Acheto E-commerce" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Démarrer MongoDB avec Docker
Write-Host "`n[1/4] Starting MongoDB..." -ForegroundColor Yellow
docker-compose up -d

# Attendre que MongoDB soit prêt
Start-Sleep -Seconds 5

# Démarrer le backend
Write-Host "`n[2/4] Starting Flask backend..." -ForegroundColor Yellow
cd backend

# Activer l'environnement virtuel et démarrer
if (Test-Path "venv\Scripts\Activate.ps1") {
    & .\venv\Scripts\Activate.ps1
    Start-Process -NoNewWindow -FilePath "python" -ArgumentList "app.py" -WorkingDirectory (Get-Location)
} else {
    Write-Host "Virtual environment not found. Creating one..." -ForegroundColor Red
    python -m venv venv
    & .\venv\Scripts\Activate.ps1
    pip install -r requirements.txt
    Start-Process -NoNewWindow -FilePath "python" -ArgumentList "app.py" -WorkingDirectory (Get-Location)
}
cd ..

# Attendre que le backend démarre
Start-Sleep -Seconds 3

# Initialiser la base de données
Write-Host "`n[3/4] Initializing database..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5000/api/init" -Method POST -UseBasicParsing
    Write-Host "Database initialized successfully!" -ForegroundColor Green
} catch {
    Write-Host "Waiting for backend to be ready..." -ForegroundColor Yellow
    Start-Sleep -Seconds 3
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:5000/api/init" -Method POST -UseBasicParsing
        Write-Host "Database initialized successfully!" -ForegroundColor Green
    } catch {
        Write-Host "Could not initialize database. Please start backend manually." -ForegroundColor Red
    }
}

# Démarrer le frontend
Write-Host "`n[4/4] Starting Next.js frontend..." -ForegroundColor Yellow
cd frontend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev"
cd ..

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "Acheto E-commerce is running!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Backend API: http://localhost:5000" -ForegroundColor Cyan
Write-Host "MongoDB: localhost:27017" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to stop all services..." -ForegroundColor Yellow

# Attendre une touche pour arrêter
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Nettoyage
Write-Host "`nStopping services..." -ForegroundColor Yellow
Get-Process | Where-Object { $_.ProcessName -eq "python" } | Stop-Process -Force
Get-Process | Where-Object { $_.ProcessName -eq "node" } | Stop-Process -Force
docker-compose down

Write-Host "Services stopped." -ForegroundColor Green
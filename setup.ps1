# setup.ps1
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setting up Acheto E-commerce" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Vérifier Python
Write-Host "`nChecking Python installation..." -ForegroundColor Yellow
try {
    $pythonVersion = python --version
    Write-Host "Found: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "Python not found. Please install Python 3.9 or higher." -ForegroundColor Red
    exit 1
}

# Vérifier Node.js
Write-Host "`nChecking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "Found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js not found. Please install Node.js 18 or higher." -ForegroundColor Red
    exit 1
}

# Vérifier Docker
Write-Host "`nChecking Docker installation..." -ForegroundColor Yellow
try {
    $dockerVersion = docker --version
    Write-Host "Found: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "Docker not found. Please install Docker Desktop." -ForegroundColor Red
    exit 1
}

# Configuration du backend
Write-Host "`n[1/3] Setting up backend..." -ForegroundColor Yellow
cd backend

# Créer l'environnement virtuel
if (-not (Test-Path "venv")) {
    Write-Host "Creating virtual environment..." -ForegroundColor Yellow
    python -m venv venv
}

# Activer et installer les dépendances
Write-Host "Activating virtual environment and installing dependencies..." -ForegroundColor Yellow
& .\venv\Scripts\Activate.ps1
pip install --upgrade pip
pip install -r requirements.txt

cd ..

# Configuration du frontend
Write-Host "`n[2/3] Setting up frontend..." -ForegroundColor Yellow
cd frontend
Write-Host "Installing npm dependencies (this may take a few minutes)..." -ForegroundColor Yellow
npm install
cd ..

# Démarrer MongoDB et initialiser
Write-Host "`n[3/3] Starting MongoDB and initializing database..." -ForegroundColor Yellow
docker-compose up -d

Write-Host "`nWaiting for MongoDB to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Démarrer le backend temporairement pour initialiser
Write-Host "Starting backend to initialize database..." -ForegroundColor Yellow
cd backend
$backendProcess = Start-Process -NoNewWindow -FilePath "python" -ArgumentList "app.py" -PassThru
cd ..

Start-Sleep -Seconds 3

Write-Host "Initializing database with sample products..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5000/api/init" -Method POST -UseBasicParsing
    Write-Host "Database initialized successfully!" -ForegroundColor Green
} catch {
    Write-Host "Could not initialize database." -ForegroundColor Red
}

# Arrêter le backend temporaire
Stop-Process -Id $backendProcess.Id -Force

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "Setup completed successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "To start the application, run: .\start.ps1" -ForegroundColor Cyan
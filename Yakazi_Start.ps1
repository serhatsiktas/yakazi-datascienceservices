# 🚀 Yakazi Smart Startskript v3.0
# Erkennt automatisch pCloud / lokalen Pfad und startet das Projekt mit passendem Cache

Write-Host "---------------------------------------------"
Write-Host "🔹 YAKAZI | Data Science Services - Smart Dev Start"
Write-Host "---------------------------------------------`n"

# 🧠 Projektname
$projectName = "yakazi-datascienceservices"

# 📁 Mögliche Projektpfade
$pcloudPath = "P:\02_Dokumente\Projekte\Yakazi\GitHub\$projectName"
$localPath  = "C:\Yakazi\$projectName"

# 💾 Cache-Verzeichnis (immer lokal auf C:)
$cachePath = "C:\nextcache\yakazi-dss"

# 🧭 Prüfe pCloud-Laufwerk
if (Test-Path $pcloudPath) {
    Write-Host "✅ Projekt auf pCloud gefunden:"
    Write-Host "   $pcloudPath"
    $projectPath = $pcloudPath
} elseif (Test-Path $localPath) {
    Write-Host "⚙️  pCloud nicht verbunden – starte lokale Kopie:"
    Write-Host "   $localPath"
    $projectPath = $localPath
} else {
    Write-Host "❌ Fehler: Kein gültiger Projektpfad gefunden!"
    Write-Host "Bitte stelle sicher, dass pCloud verbunden ist oder ein lokaler Projektordner existiert."
    Pause
    Exit
}

# 📁 Prüfe Cache-Verzeichnis
if (-Not (Test-Path $cachePath)) {
    Write-Host "`n📂 Cache-Ordner nicht gefunden. Erstelle: $cachePath"
    New-Item -ItemType Directory -Force -Path $cachePath | Out-Null
} else {
    Write-Host "`n✅ Cache-Ordner vorhanden."
}

# 🔄 In Projektverzeichnis wechseln
Set-Location $projectPath
Write-Host "`n📦 Aktiver Projektpfad: $projectPath"

# 📦 Prüfe Node Modules
if (Test-Path "node_modules") {
    Write-Host "`n🧩 Node Modules erkannt."
} else {
    Write-Host "`n📦 Node Modules fehlen – führe npm install aus..."
    npm install
}

# ⚙️ Starte Next.js Server
Write-Host "`n🚀 Starte Next.js Entwicklungsserver..."
$env:NEXT_CACHE_DIR = $cachePath
npm run dev

# 🕹 Fenster offen halten
Write-Host "`n---------------------------------------------"
Write-Host "✅ Server gestoppt oder beendet."
Write-Host "Drücke eine Taste, um das Fenster zu schließen..."
Pause

# 💾 Yakazi Smart Backup v2.0
# Automatische tägliche Sicherung mit Datum & automatischer Bereinigung alter Backups

Write-Host "---------------------------------------------"
Write-Host "🔹 YAKAZI | Smart Backup v2.0"
Write-Host "---------------------------------------------`n"

# 🧠 Projektname
$projectName = "yakazi-datascienceservices"

# 📁 Quellpfade
$pcloudPath = "P:\02_Dokumente\Projekte\Yakazi\GitHub\$projectName"
$localPath  = "C:\Yakazi\$projectName"

# 📦 Backup-Stammverzeichnis
$backupRoot = "C:\Yakazi_Backup"

# 📅 Aktuelles Datum (z. B. 2025-10-13)
$dateStamp = (Get-Date).ToString("yyyy-MM-dd")

# 📁 Zielordner für heutiges Backup
$backupPath = Join-Path $backupRoot "$dateStamp\$projectName"

# 📍 Quelle bestimmen
if (Test-Path $pcloudPath) {
    Write-Host "✅ Quelle (pCloud) gefunden:"
    Write-Host "   $pcloudPath"
    $sourcePath = $pcloudPath
} elseif (Test-Path $localPath) {
    Write-Host "⚙️  pCloud nicht verbunden – nutze lokale Quelle:"
    Write-Host "   $localPath"
    $sourcePath = $localPath
} else {
    Write-Host "❌ Fehler: Kein Quellpfad gefunden!"
    Write-Host "Bitte pCloud verbinden oder lokalen Ordner prüfen."
    Pause
    Exit
}

# 📁 Backup-Ordner prüfen/erstellen
if (-Not (Test-Path $backupPath)) {
    Write-Host "`n📂 Erstelle Backup-Ziel: $backupPath"
    New-Item -ItemType Directory -Force -Path $backupPath | Out-Null
} else {
    Write-Host "`n✅ Backup-Ziel vorhanden."
}

# 🔄 Backup starten (robocopy mit Ausschlüssen)
Write-Host "`n🔄 Starte inkrementelles Backup..."
$cmd = "robocopy `"$sourcePath`" `"$backupPath`" /MIR /XD node_modules .next .git /R:1 /W:1"
Write-Host "➡️  Befehl: $cmd`n"
Invoke-Expression $cmd

# 📊 Prüfergebnis
if ($LASTEXITCODE -lt 8) {
    Write-Host "`n✅ Backup erfolgreich abgeschlossen."
} else {
    Write-Host "`n⚠️  Backup abgeschlossen, aber mit Warnungen (Code: $LASTEXITCODE)"
}

# 🧹 Alte Backups aufräumen (älter als 7 Tage)
Write-Host "`n🧹 Lösche alte Backups (älter als 7 Tage)..."
$oldBackups = Get-ChildItem -Path $backupRoot | Where-Object {
    $_.PSIsContainer -and
    ($_.Name -match '^\d{4}-\d{2}-\d{2}$') -and
    ((Get-Date) - [datetime]$_.Name -gt (New-TimeSpan -Days 7))
}

foreach ($folder in $oldBackups) {
    Write-Host "🗑️  Entferne $($folder.FullName)"
    Remove-Item -Recurse -Force $folder.FullName
}

Write-Host "`n---------------------------------------------"
Write-Host "📦 Quelle: $sourcePath"
Write-Host "💾 Neues Backup: $backupPath"
Write-Host "---------------------------------------------"
Write-Host "✅ Backup abgeschlossen – drücke eine Taste zum Beenden."
Pause

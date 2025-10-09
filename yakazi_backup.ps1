# 🧠 YAKAZI Backup-Skript für Windows PowerShell
# Autor: Serhat Siktas & GPT-5
# Zweck: Schnelles Git-Backup mit Zeitstempel und Push zu GitHub

# 🗂 Projektverzeichnis anpassen (Pfad zu deinem Repo)
Set-Location "C:\Users\Besitzer\OneDrive - GFN GmbH (EDU)\Dokumente\GitHub\yakazi-datascienceservices"

# 🕒 Zeitstempel erzeugen
$timestamp = Get-Date -Format "yyyy-MM-dd-HHmm"
$branch = "backup-$timestamp"

Write-Host "🧠 Starte Backup für YAKAZI-Projekt..."
Write-Host "⏰ Erstelle Branch: $branch"

# 🔁 Auf main wechseln und Änderungen erfassen
git checkout main
git add .

# 💾 Commit mit Zeitangabe
git commit -m "Backup: Stable YAKAZI-KI-Version $timestamp"

# 🌿 Neuen Backup-Branch anlegen
git checkout -b $branch

# ☁️ Zu GitHub pushen
git push origin $branch

Write-Host "✅ Backup erfolgreich erstellt und auf GitHub hochgeladen:"
Write-Host "   → Branch: $branch"
Write-Host "   → Repository: $(git remote get-url origin)"
Write-Host ""
Write-Host "📦 Du kannst diesen Stand jederzeit wiederherstellen mit:"
Write-Host "   git checkout $branch"

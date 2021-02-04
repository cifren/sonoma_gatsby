npm run build
Remove-Item -Recurse -ErrorAction Ignore -Force .\publicShared-tmp
Copy-Item -Recurse .\public\ .\publicShared-tmp
Remove-Item -Recurse -ErrorAction Ignore -Force .\publicShared
Move-Item .\publicShared-tmp .\publicShared

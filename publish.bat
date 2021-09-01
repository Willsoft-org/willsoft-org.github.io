@echo off
rem Clear everything in the public folder
del \\192.168.0.28\william\websites\willsoft.org\* /F /Q
rem Start copying files and folders to the public folder
xcopy src\* \\192.168.0.28\william\websites\willsoft.org\src\ /Y
xcopy public\* \\192.168.0.28\william\websites\willsoft.org\public\ /Y /E

rem Process is done
echo.
echo Done!
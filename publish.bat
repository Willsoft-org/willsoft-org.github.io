@echo off
rem Clear everything in the public folder
del \\192.168.0.28\william\websites\lento-lang.org\* /F /Q
rem Start copying files and folders to the public folder
xcopy favicon.ico \\192.168.0.28\william\websites\lento-lang.org\ /Y
xcopy *.php \\192.168.0.28\william\websites\lento-lang.org\ /Y
xcopy util\* \\192.168.0.28\william\websites\lento-lang.org\util\ /Y /E
xcopy style\main.css \\192.168.0.28\william\websites\lento-lang.org\style\ /Y
xcopy script\* \\192.168.0.28\william\websites\lento-lang.org\script\ /Y
xcopy assets\* \\192.168.0.28\william\websites\lento-lang.org\assets\ /Y /E
xcopy _articles\* \\192.168.0.28\william\websites\lento-lang.org\_articles\ /Y /E

rem Site subpages
xcopy doc\* \\192.168.0.28\william\websites\lento-lang.org\doc\ /Y /E
xcopy documentation\* \\192.168.0.28\william\websites\lento-lang.org\documentation\ /Y /E
xcopy guides\* \\192.168.0.28\william\websites\lento-lang.org\guides\ /Y /E

rem Process is done
echo.
echo Done!
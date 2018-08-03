@echo off


:: rsync ָ��
set rsync_target=leo@206.161.250.12::bjhstatic
set rsync_target_test=leo@206.161.250.12::bjhstatic

:: ��ǰ·��
set cur_dir=%~dp0

:: ����ǰ·��ת��Ϊrsync��ʽ��
set rsync_cur_dir=%cur_dir::\=/%
set rsync_cur_dir=/cygdrive/%rsync_cur_dir:\=/%

:: ���ش������·��
set source_dir=%rsync_cur_dir%/dist/


:: ��ʼѡ��
:start
echo ѡ�����͵�ַ
echo 1 ���ϻ���(ȷ����ͨ������!)
echo 2 ���Ի���
echo 3 ȡ���ύ
set choice=
set /p choice=����������:
if not '%choice%'=='' set choice=%choice:~0,1%
if '%choice%'=='1' goto online
if '%choice%'=='2' goto test
if '%choice%'=='3' goto exit
echo "%choice%" �������
echo.

goto start

:online
echo ====online====
rsync -auvz --progress --delete  --password-file=/cygdrive/c/rsyncd.secrets<c:/pwd.txt %source_dir%  %rsync_target%  --exclude=*svn* --exclude=*properties*  --exclude=*.jar --exclude=*.jsp --exclude=*.class --exclude=*classes* --exclude=/WEB-INF --exclude=/payment --exclude=/META-INF --exclude=/commons --exclude=/tpl
goto end

:test
echo ====test====
rsync -auvz --progress --delete  --password-file=/cygdrive/c/rsyncd.secrets<c:/pwd.txt %source_dir%  %rsync_target_test%  --exclude=*svn* --exclude=*properties*  --exclude=*.jar --exclude=*.jsp --exclude=*.class --exclude=*classes* --exclude=/WEB-INF --exclude=/payment --exclude=/META-INF --exclude=/commons --exclude=/tpl
goto end

:exit
echo ====exit====
goto end

:end
:: pause


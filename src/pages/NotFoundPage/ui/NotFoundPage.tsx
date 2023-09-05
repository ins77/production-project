import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import cls from './NotFoundPage.module.scss';

function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage)}>
            {t('Страница не найдена')}
        </div>
    );
}

export default NotFoundPage;

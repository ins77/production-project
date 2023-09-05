import React, { FC } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const handleReloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div
            className={classNames(cls.PageError, {}, [className])}
        >
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={handleReloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};

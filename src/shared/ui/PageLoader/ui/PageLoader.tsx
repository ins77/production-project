import React, { FC } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '../../Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div
        className={classNames(cls.pageLoader, {}, [className])}
    >
        <Loader />
    </div>
);

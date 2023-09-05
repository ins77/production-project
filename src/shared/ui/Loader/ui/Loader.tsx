import React, { FC } from 'react';
import './Loader.scss';
import { classNames } from 'helpers/classNames/classNames';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames('ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

import React, { FC, useState } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button type="button" onClick={handleToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher className={className} />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

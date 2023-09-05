import React, { FC, useState, useEffect } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

export const BugButton: FC = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const handleThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={handleThrow}
        >
            {t('Сгенерировать ошибку')}
        </Button>
    );
};

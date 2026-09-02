'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { PaymentsPage } from '@/views/PaymentsPage';

export const PaymentsClient: React.FC = () => {
  const { currency, setCurrency, onNavigate, openStrategyModal } = useApp();

  return (
    <PaymentsPage
      currency={currency}
      onCurrencyChange={setCurrency}
      onNavigate={onNavigate}
      onOpenStrategyModal={openStrategyModal}
    />
  );
};

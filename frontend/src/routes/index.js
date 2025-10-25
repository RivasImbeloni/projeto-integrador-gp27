import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/Mainlayout';
import GoalCreatePage from '../pages/GoalCreatePage';

// Componente simples para a página de "Visualizar Metas"
const GoalListPage = () => <h1>Minhas Metas (Página em construção)</h1>;

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route 
        path="/" 
        element={
          <MainLayout>
            <GoalListPage />
          </MainLayout>
        } 
      />
      <Route 
        path="/cadastrar" 
        element={
          <MainLayout>
            <GoalCreatePage />
          </MainLayout>
        } 
      />
      <Route 
        path="/editar"
        element={
          <MainLayout>
            {/* Aqui irei adicionar a rota de edição */}
          </MainLayout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
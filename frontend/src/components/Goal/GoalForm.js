import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const GoalForm = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    metrica_kpi: '',
    valor_alvo: '',
    prazo: '',
    area_subarea: 'Marketing / Conteúdo' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados a enviar:", formData);
    alert('Meta enviada para aprovação! (Veja o console)');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* O 'name' em cada Input é crucial! 
        Tem que ser igual às chaves do estado 'formData'
      */}
      <Input
        label="Título da Meta"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Ex: Aumentar leads"
      />
      {/* Aqui você adicionaria o <Textarea> para "Descrição"
        <Textarea 
          label="Descrição"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          placeholder="Descreva sobre a meta"
        />
      */}
      
      {/* Campos Métrica e Valor-Alvo (lado a lado) */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <Input
            label="Métrica (KPI)"
            name="metrica_kpi"
            value={formData.metrica_kpi}
            onChange={handleChange}
            placeholder="Leads / Conversão / Tráfego"
          />
        </div>
        <div style={{ flex: 1 }}>
          <Input
            label="Valor-Alvo"
            name="valor_alvo"
            value={formData.valor_alvo}
            onChange={handleChange}
            placeholder="Ex: 25%"
          />
        </div>
      </div>
      
      {/* Campos Prazo e Área/Subárea (lado a lado) */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <Input
            label="Prazo"
            name="prazo"
            type="date" // Usar tipo 'date' facilita
            value={formData.prazo}
            onChange={handleChange}
            placeholder="dd/mm/aaaa"
          />
        </div>
        <div style={{ flex: 1 }}>
          {/* Aqui você adicionaria o <Select> para "Área/Subárea"
            <Select
              label="Área/Subárea"
              name="area_subarea"
              value={formData.area_subarea}
              onChange={handleChange}
            >
              <option value="Marketing / Conteúdo">Marketing / Conteúdo</option>
              <option value="Vendas">Vendas</option>
              <option value="Produto">Produto</option>
            </Select>
          */}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Button type="button" styleType="default">Cancelar</Button>
        <Button type="submit" styleType="primary">Enviar para aprovação</Button>
      </div>
    </form>
  );
};

export default GoalForm;
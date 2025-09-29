import { useState, useEffect } from 'react';

function PropertyForm({ onSubmit, editingProperty, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    status: 'active'
  });

  useEffect(() => {
    if (editingProperty) {
      setFormData(editingProperty);
    }
  }, [editingProperty]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', address: '', status: 'active' });
  };

  return (
    <div className="form-container">
      <h2>{editingProperty ? 'Editar Imóvel' : 'Adicionar Novo Imóvel'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Ex: Apartamento Jardins"
          />
        </div>

        <div className="form-group">
          <label>Endereço:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Ex: Rua Augusta, 1000 - São Paulo"
          />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>

        <button type="submit" className="btn-primary">
          {editingProperty ? 'Atualizar' : 'Adicionar'} Imóvel
        </button>
        {editingProperty && (
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default PropertyForm;
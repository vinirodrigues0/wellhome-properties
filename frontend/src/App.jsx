import { useState, useEffect } from 'react';
import PropertyForm from './components/PropertyForm';
import PropertyList from './components/PropertyList';
import { getProperties, createProperty, updateProperty, deleteProperty } from './services/api';

function App() {
  const [properties, setProperties] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);

  // Carregar imóveis ao iniciar
  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const response = await getProperties();
      setProperties(response.data);
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error);
      alert('Erro ao carregar imóveis. Verifique se o backend está rodando.');
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingProperty) {
        // Atualizar imóvel existente
        await updateProperty(editingProperty.id, formData);
        alert('Imóvel atualizado com sucesso!');
        setEditingProperty(null);
      } else {
        // Criar novo imóvel
        await createProperty(formData);
        alert('Imóvel criado com sucesso!');
      }
      loadProperties();
    } catch (error) {
      console.error('Erro ao salvar imóvel:', error);
      alert('Erro ao salvar imóvel.');
    }
  };

  const handleEdit = (property) => {
    setEditingProperty(property);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este imóvel?')) {
      try {
        await deleteProperty(id);
        alert('Imóvel deletado com sucesso!');
        loadProperties();
      } catch (error) {
        console.error('Erro ao deletar imóvel:', error);
        alert('Erro ao deletar imóvel.');
      }
    }
  };

  const handleCancel = () => {
    setEditingProperty(null);
  };

  return (
    <div className="container">
      <h1>Welhome - Gestão de Imóveis</h1>
      
      <PropertyForm 
        onSubmit={handleSubmit}
        editingProperty={editingProperty}
        onCancel={handleCancel}
      />
      
      <PropertyList 
        properties={properties}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
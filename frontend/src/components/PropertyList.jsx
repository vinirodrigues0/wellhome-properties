function PropertyList({ properties, onEdit, onDelete }) {
  if (properties.length === 0) {
    return (
      <div className="empty-state">
        <h3>Nenhum imóvel cadastrado</h3>
        <p>Adicione seu primeiro imóvel usando o formulário acima.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Lista de Imóveis</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Endereço</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.id}</td>
              <td>{property.title}</td>
              <td>{property.address}</td>
              <td>
                <span className={`status status-${property.status}`}>
                  {property.status === 'active' ? 'Ativo' : 'Inativo'}
                </span>
              </td>
              <td>
                <button 
                  className="btn-edit" 
                  onClick={() => onEdit(property)}
                >
                  Editar
                </button>
                <button 
                  className="btn-delete" 
                  onClick={() => onDelete(property.id)}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyList;
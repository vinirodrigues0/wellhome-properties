# 🏠 Welhome Properties - Sistema de Gestão de Imóveis

Sistema fullstack para gerenciamento de imóveis desenvolvido como case técnico para a Welhome.

## 🌐 Demo Online

- **🚀 Aplicação:** https://welhome-properties-frontend.onrender.com
- **🔌 API Backend:** https://wellhome-properties.onrender.com

> ⚠️ **Nota:** O backend pode demorar ~30 segundos na primeira requisição (plano gratuito do Render).

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** com Express
- **SQLite** (banco de dados)
- **CORS** para comunicação com frontend

### Frontend
- **React** com Vite
- **Axios** para requisições HTTP
- **CSS3** para estilização

## 📋 Funcionalidades

- ✅ Listar todos os imóveis
- ✅ Adicionar novo imóvel
- ✅ Editar imóvel existente
- ✅ Deletar imóvel
- ✅ Filtro de status (Ativo/Inativo)
- ✅ Interface responsiva e intuitiva
- ✅ Validação de campos obrigatórios

## 🎯 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/properties` | Lista todos os imóveis |
| POST | `/api/properties` | Cria um novo imóvel |
| PUT | `/api/properties/:id` | Atualiza um imóvel |
| DELETE | `/api/properties/:id` | Remove um imóvel |

## 💡 Decisões Técnicas

- **SQLite:** Banco de dados leve, perfeito para MVP e demonstrações
- **React + Vite:** Desenvolvimento rápido e moderna stack frontend
- **Arquitetura MVC:** Separação clara de responsabilidades (Controllers, Routes, Services)
- **API RESTful:** Padrão de comunicação claro e bem documentado
- **Deploy no Render:** Demonstração funcional sem necessidade de instalação local

## 👨‍💻 Desenvolvedor

**Vinicius Rodrigues** - Case Técnico Welhome

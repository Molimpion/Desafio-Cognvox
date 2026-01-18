import api from "./api";

const ActorService = {
  getAll: async (filters = {}) => {
    try {
      const response = await api.get("/atores", { params: filters });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar atores:", error);
      throw error;
    }
  },

  getFilterData: async () => {
    try {
      const response = await api.get("/dados-auxiliares");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados de filtro:", error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      await api.delete(`/atores/${id}`);
    } catch (error) {
      console.error("Erro ao deletar ator:", error);
      throw error;
    }
  },
};

export default ActorService;

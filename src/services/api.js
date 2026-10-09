// Toutes les requêtes vers le back-end sont regroupées ici.

const API_URL = 'http://localhost:8080/api/properties'

// Récupère la liste de tous les logements
// async : la fonction est asynchrone (elle attend la réponse du serveur)
export async function getProperties() {
  // fetch envoie la requête, await attend la réponse
  const response = await fetch(API_URL)

  // response.ok est faux si le serveur répond avec une erreur (404, 500...)
  if (!response.ok) {
    throw new Error('Impossible de récupérer les logements')
  }

  // Convertit la réponse (texte JSON) en objet JavaScript utilisable
  return response.json()
}

// Récupère un seul logement grâce à son id
export async function getProperty(id) {
  // Les backticks `...` permettent d'insérer une variable avec ${...}
  const response = await fetch(`${API_URL}/${id}`)

  // Si l'id n'existe pas, le back-end renvoie une erreur 404
  if (!response.ok) {
    throw new Error('Logement introuvable')
  }

  return response.json()
}
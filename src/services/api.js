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
// Renvoie null si le logement n'existe pas (erreur 404 du back-end)
export async function getProperty(id) {
  const response = await fetch(`${API_URL}/${id}`)

  // Logement inexistant : on renvoie null pour rediriger vers la page 404
  if (response.status === 404) {
    return null
  }

  // Autre problème (serveur en panne...) : on lève une erreur
  if (!response.ok) {
    throw new Error('Impossible de récupérer le logement')
  }

  return response.json()
}
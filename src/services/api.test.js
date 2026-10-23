// Tests du service api.js
// On remplace fetch par une fausse version (un "mock") :
// les tests ne dépendent pas du vrai back-end

import { describe, it, expect, vi, afterEach } from 'vitest'
import { getProperties, getProperty } from './api'

// Fabrique une fausse réponse du serveur
function fakeResponse(status, data) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => data,
  }
}

describe('api', () => {
  // Après chaque test, on remet le vrai fetch en place
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('getProperties', () => {
    it('renvoie la liste des logements', async () => {
      const logements = [{ id: '1', title: 'Appartement cosy' }]
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(fakeResponse(200, logements))

      const result = await getProperties()

      expect(result).toEqual(logements)
      expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/properties')
    })

    it('lève une erreur si le serveur répond mal', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(fakeResponse(500))

      await expect(getProperties()).rejects.toThrow('Impossible de récupérer les logements')
    })
  })

  describe('getProperty', () => {
    it('renvoie le logement demandé', async () => {
      const logement = { id: 'abc', title: 'Studio' }
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(fakeResponse(200, logement))

      const result = await getProperty('abc')

      expect(result).toEqual(logement)
      expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/properties/abc')
    })

    it("renvoie null si le logement n'existe pas (404)", async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(fakeResponse(404))

      expect(await getProperty('inconnu')).toBeNull()
    })

    it('lève une erreur si le serveur est en panne', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(fakeResponse(500))

      await expect(getProperty('abc')).rejects.toThrow('Impossible de récupérer le logement')
    })
  })
})
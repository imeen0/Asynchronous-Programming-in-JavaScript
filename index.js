async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value)
      await new Promise(resolve => setTimeout(resolve, 1000)); // Délai de 1 seconde
    }
  }
  
  async function awaitCall() {
  const fakeAPI = () => new Promise(resolve => setTimeout(() => resolve("Données API"), 1000))
  
  const data = await fakeAPI()
  console.log("Données reçues :", data)
}

async function awaitCallWithErrorHandling() {
    const fakeAPI = () => new Promise((_, reject) => setTimeout(() => reject("Erreur API"), 1000))
    
    try {
      const data = await fakeAPI()
      console.log("Données reçues :", data)
    } catch (error) {
      console.error("Une erreur s'est produite :", error)
    }
  }
  
  async function chainedAsyncFunctions() {
    const delay = (msg) => new Promise(resolve => setTimeout(() => {
      console.log(msg)
      resolve()
    }, 1000))
  
    await delay("Fonction 1 terminée")
    await delay("Fonction 2 terminée")
    await delay("Fonction 3 terminée")
  }
  
  async function concurrentRequests() {
    const fakeAPI1 = () => new Promise(resolve => setTimeout(() => resolve("Données API 1"), 1000))
    const fakeAPI2 = () => new Promise(resolve => setTimeout(() => resolve("Données API 2"), 1000))
    
    const [data1, data2] = await Promise.all([fakeAPI1(), fakeAPI2()])
    console.log("Résultats combinés :", { data1, data2 })
  }
  
  async function parallelCalls(urls) {
    const fetchData = (url) => new Promise(resolve => setTimeout(() => resolve(`Données de ${url}`), 1000))
  
    const results = await Promise.all(urls.map(url => fetchData(url)))
    console.log("Réponses :", results)
  }
  
  
  
  
   



 

  
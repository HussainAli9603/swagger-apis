const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/user')
    const products = data.map((product) => {
      const { image: { url }, name, email, } = product
      return `<article class="product">
                <img src="${url}" alt="${name}"/>
                  <div class="info">
                    <h5>${name}</h5>
                    <h5 class="price">${email}</h5>
                  </div>
              </article>`
    }).join('')
    result.innerHTML = products
  } catch (error) {
    result.innerHTML = `<h4>There was an error. Please try again later</h4>`
  }
}

fetchData()

import modulus from '@wide/modulus'
import Component from '@wide/modulus/src/component'

modulus.component('intro', class extends Component {
  run() {
    if (this.refs.modules && this.refs.moduleItem) {
      const modules = sessionStorage.getItem('github-modulus')

      modules ? this.setList(JSON.parse(modules)) : this.fetchGithubData()
    }
  }

  /**
   * Get GITHub @wide modules list
   */
  fetchGithubData() {
    try {
      // Reset HTML
      this.refs.modules.innerHTML = ''

      // Get data
      const headers = new Headers();
      headers.append('Accept', 'application/vnd.github.mercy-preview+json')
  
      fetch('https://api.github.com/orgs/wide/repos', {
        method: 'GET',
        headers
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            // Remove all not Modulus v2 modules
            const modules = data.filter((d) => d.topics && d.topics.length && ~d.topics.indexOf('modulus'))

            // Store in local to avoid multiple API calls
            sessionStorage.setItem('github-modulus', JSON.stringify(modules))
  
            this.setList(modules)
          }
        })
    } catch(e) {
      console.error('Error on fetching GITHub data: ', e)
    }
  }

  /**
   * Set list of modules
   *
   * @param {object[]} [modules] 
   */
  setList(modules = []) {
    for (const module of modules) {
      // Clone template
      const content = document.importNode(this.refs.moduleItem.content, true)

      if (content) {
        // Set link data
        const elLink = content.querySelector('[data-module="link"]')

        if (elLink) {
          elLink.setAttribute('href', module.html_url)
          elLink.innerHTML = module.full_name
        }
        // Set description data
        const elDescription = content.querySelector('[data-module="description"]')

        if (elDescription) {
          elDescription.innerHTML = module.description
        }

        // Set infos data
          // Set language
        const elLanguage = content.querySelector('[data-module="language"]')

        if (elLanguage) {
          elLanguage.innerHTML = module.language
          elLanguage.previousSibling && elLanguage.previousSibling.previousSibling.classList.add(`language-${module.language.toLowerCase()}`)
        }

          // Set licence
        const elLicense = content.querySelector('[data-module="license"]')

        if (elLicense) {
          elLicense.innerHTML = module.license && module.license.spdx_id
        }
          // Set forks
        const elForks = content.querySelector('[data-module="forks"]')

        if (elForks) {
          elForks.innerHTML = module.forks_count
        }
          // Set stars
        const elStars = content.querySelector('[data-module="stars"]')

        if (elStars) {
          elStars.innerHTML = module.stargazers_count
        }
          // Set issues
        const elIssues = content.querySelector('[data-module="issues"]')

        if (elIssues) {
          elIssues.innerHTML = module.open_issues_count
        }
          // Set date
        const elUpdated = content.querySelector('[data-module="updated"]')

        if (elUpdated) {
          const isUpdated = !!module.updated_at ? 'Updated ' : 'Created '
          // Get date
          const date = new Date(module.updated_at || module.created_at)
          elUpdated.innerHTML = `${isUpdated} ${this.getDate(date)}`
        }

        this.refs.modules.append(content)
      }
    }
  }

  /**
   * Compare today and module update
   *
   * @param {Date} date 
   *
   * @return {string}
   * e.g. "4 minutes ago"
   */
  getDate(date) {
    if (date) {
      const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 }
      ]
      
      try {
        // Difference in seconds
        const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
        // Find interval object
        let interval = intervals.find(i => i.seconds < seconds)
    
        const count = interval ? Math.floor(seconds / interval.seconds) : 0
        // Security
        // If 0 second, set interval to "second" type
        interval = interval || intervals[intervals.length - 1]
        
        return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
      } catch(e) {
        return ''
      }
    }
  }
})
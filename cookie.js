/**
 * 
 * Esm-Cookie
 * JavaScript Module Cookie 
 * https://github.com/pedrazzi/esm-cookie
 * 
 * @version 0.0.2
 *
 */
 
class cookie {
    constructor() {
        this.version = '0.0.2'
        this.name = 'esm-cookie'
    }

    get(name) {
        name += "="
        const decodedCookie = decodeURIComponent(document.cookie),
            ca = decodedCookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) == ' ') { c = c.substring(1) }
            if (c.indexOf(name) == 0) { return c.substring(name.length, c.length) }
        }
    }

    set(name, value, attr = { expires: Infinity, path: "/" } ) {
        let d = new Date(), expires
        d.setTime(d.getTime() + (attr.expires * 24 * 60 * 60 * 1000))
        expires = d.toUTCString()
        document.cookie = `${name}=${value};expires=${expires};path=${attr.path}`
    }

    remove(name, attr = { path: "/" }) {
        this.set(name, "", 0, attr.path)
    }

    getAll() {
        const ca = decodeURIComponent(document.cookie).split(';'),
             arr =  []
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) == ' ') { c = c.substring(1) }
            let item = c.substring(name.length, c.length).split('=')
            arr[item[0]] = item[1]
        }
        return arr    
    }
}

export default new cookie()

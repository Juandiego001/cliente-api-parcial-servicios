import axios from "axios";

class BooksService {

    static getBooks() {
        return axios.get('http://192.168.60.3:5000/books');
    }

    static editBook(id, title, description, author) {
        return axios.put(`http://192.168.60.3:5000/books/${id}`, {
            title,
            description,
            author
        })
    }

    static deleteBook(id) {
        return axios.delete(`http://192.168.60.3:5000/books/${id}`)
    }

    static addBook(title, description, author) {
        return axios.post(`http://192.168.60.3:5000/books`, {
            title,
            description,
            author
        })
    }

}

export default BooksService;
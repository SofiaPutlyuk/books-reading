const Book = require("../models/Book")
exports.getBooks = async(req,res) => {
try{
const book = await Book.find()
res.status(200).json(book)
} catch(error){
    res.status(500).json({message:error})
}
}
exports.postBooks = async(req,res) => {
    try{
    const {name,author,publish,pageCount} = req.body
    const newBook = new Book({name,author,publish,pageCount})
    newBook.save()
    res.status(201).json(newBook)
    } catch(error){
        res.status(500).json({message:error})
    }
}
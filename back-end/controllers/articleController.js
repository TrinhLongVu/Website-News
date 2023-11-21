exports.getAllArticle = (req, res) => {
    res.status(200).json({
        status: "success",
        data: [{
            id: 1,
            title: 'Nguyen An Nam'
        }]
    });
}

exports.getArticle = (req, res) => {
    res.status(500).send({
        status: "error",
    })
}

exports.createArticle = (req, res) => {
    res.status(500).send({
        status: "error",
    })
}

exports.updateArticle = (req, res) => {
    res.status(500).send({
        status: "error",
    })
}

exports.deleteArticle = (req, res) => {
    res.status(500).send({
        status: "error",
    })
}
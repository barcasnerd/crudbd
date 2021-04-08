const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM padre', (err, padre) => {
            if (err) {
                res.json(err);
            }
            res.render('formConsulta1', {
                data: padre
            });
        });
    });
};


controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM hijo WHERE hijode = ?", [id], (err, rows) => {
            console.error(err);
            res.render('resConsulta1', {
                data: rows
            })
        });
    });
};


controller.hijoSinPadre = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM hijo WHERE hijode IS NULL', (err, hijo) => {
            if (err) {
                res.json(err);
            }
            res.render('resConsulta1', {
                data: hijo
            });
        });
    });
};


controller.padreSinHijo = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM padre p WHERE NOT EXISTS(SELECT NULL FROM hijo h WHERE h.hijode=p.id)', (err, padre) => {
            if (err) {
                res.json(err);
            }
            res.render('formConsulta2', {
                data: padre
            });
        });
    });
};

controller.numeroHijos = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT p.id, p.nom, COUNT(h.id) AS cantidad FROM padre p INNER JOIN hijo as h ON p.id = h.hijode GROUP by p.id', (err, result) => {
            if (err) {
                res.json(err);
            }
            res.render('formConsulta4', {
                data: result
            });
        });
    });
};


module.exports = controller;

const controller ={};

controller.list = (req, res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM deudores LIMIT 28',(err,rows)=>{
            if(err){
                res.json(err);
            }
            res.render('deudoresView',{
                data:rows
            });
        });
    });
};


controller.save =(req,res)=>{
    const data =req.body;
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO empleados set ?', [data],(err,rows)=>{
            //console.log(rows);
            res.redirect('/');
        });
    })
};


controller.update1 = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empleados WHERE idEmpleado = ?', [id], (err, rows) => {
            res.render('deudores_EditView',{
                data: rows[0]
            });
        });
    })
};

controller.update2 = (req, res) => {
    const {id} = req.params;
    const newData = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE empleados set ? WHERE idEmpleado = ?', [newData,id], (err, rows) => {
            if (err) {
                res.json(err);
                console.log('error en query');
            }
            res.redirect('/');
        });
    })
};


controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM empleados WHERE idEmpleado = ?', [id], (err, rows) => {
            //console.log(rows);
            res.redirect('/');
        });
    })
};

controller.call1 = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM deudores WHERE ID = ?', [id], (err, rows) => {
            res.render('call_1_View', {
                data: rows[0]
            });
        });
    })
};


module.exports = controller;
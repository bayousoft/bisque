var WebSqlStore = function(successCallback, errorCallback) {

    this.initializeDatabase = function(successCallback, errorCallback) {
        var self = this;
        this.db = window.openDatabase("BisqueDB", "1.0", "Listings", 200000);
        this.db.transaction(
                function(tx) {
                    self.createTable(tx);
                    self.addData(tx);
                },
                function(error) {
                    console.log('Transaction error: ' + error);
                    if (errorCallback) errorCallback();
                },
                function() {
                    console.log('Transaction success');
                    if (successCallback) successCallback();
                }
        )
    }

    this.createTable = function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS listings');
        var sql = "CREATE TABLE IF NOT EXISTS listings ( " +
            "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
            "nid INTEGER, " +
            "title VARCHAR(50))";
        tx.executeSql(sql, null,
                function() {
                    console.log('Create table success');
                },
                function(tx, error) {
                    alert('Create table error: ' + error.message);
                });
    }

    this.addData = function(tx, employees) {
        $.ajax({
            url: 'http://iberia.drupal.g2digital.com/mobile-app/listings.php',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function(data, status){
                db = window.openDatabase("BisqueDB", "1.0", "Listings", 200000);
                data.forEach(function(ob) {
                    db.transaction(function(tx) {
                        tx.executeSql("insert into listings(nid,title) values(?,?)", [ob.nid,ob.title]);    
                    });
                });
            },
            error: function(){
            output.text('There was an error loading the data.');
            }
            });        
    }

    this.initializeDatabase(successCallback, errorCallback);

}

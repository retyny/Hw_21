
const storageVal = localStorage.getItem("items");
const database = storageVal?JSON.parse(storageVal):[]

class Products {
    constructor(options) {
        this.id = options.id;
        this.title = options.title;
        this.manufacture = options.manufacture;
        this.price = options.price;
    }
}

  saveItem = () => {
        if(document.getElementById("categories").value === 'Alcohol') {
            class Alcohol extends Products {
                constructor(options) {
                    super(options)
                    this.categories = options.categories;
                }
            }
            const item = new Alcohol({
                id:document.getElementById("id_1").value,
                title:document.getElementById("title").value,
                manufacture:document.getElementById("manufacture").value,
                price:document.getElementById("price").value,
                categories:document.getElementById("categories").value,
            });
            database.push(JSON.stringify(item));
            localStorage.setItem('items', JSON.stringify(database));
        }

      else if(document.getElementById("categories").value === 'Milk') {
            class Milk extends Products {
                constructor(options) {
                    super(options)
                    this.categories = options.categories;
                }
            }
            const item = new Milk({
                id:document.getElementById("id_1").value,
                title:document.getElementById("title").value,
                manufacture:document.getElementById("manufacture").value,
                price:document.getElementById("price").value,
                categories:document.getElementById("categories").value,
            });
            database.push(JSON.stringify(item));
            localStorage.setItem('items', JSON.stringify(database));
      }

       else if(document.getElementById("categories").value === 'Chocolate') {
            class Choco extends Products {
                constructor(options) {
                    super(options)
                    this.categories = options.categories;
                }
            }
            const item = new Choco({
                id:document.getElementById("id_1").value,
                title:document.getElementById("title").value,
                manufacture:document.getElementById("manufacture").value,
                price:document.getElementById("price").value,
                categories:document.getElementById("categories").value,
            });
            database.push(JSON.stringify(item));
            localStorage.setItem('items', JSON.stringify(database));
      }

      else if(document.getElementById("categories").value === 'Vegetables') {
            class Vegetables extends Products {
                constructor(options) {
                    super(options)
                    this.categories = options.categories;
                }
            }
            const item = new Vegetables({
                id:document.getElementById("id_1").value,
                title:document.getElementById("title").value,
                manufacture:document.getElementById("manufacture").value,
                price:document.getElementById("price").value,
                categories:document.getElementById("categories").value,
            });
            database.push(JSON.stringify(item));
            localStorage.setItem('items', JSON.stringify(database));
      }

      else if(document.getElementById("categories").value === 'Fruits') {
            class Fruits extends Products {
                constructor(options) {
                    super(options)
                    this.categories = options.categories;
                }
            }
            const item = new Fruits({
                id:document.getElementById("id_1").value,
                title:document.getElementById("title").value,
                manufacture:document.getElementById("manufacture").value,
                price:document.getElementById("price").value,
                categories:document.getElementById("categories").value,
            });
            // Перевод customer в стринг и пуш в базу данных
            database.push(JSON.stringify(item));
            // Сохранение всех билетов в localStorage
            localStorage.setItem('items', JSON.stringify(database));
        }
    }

    getAll = () => {
        database.map((value, index) => {
            if(value) {
                console.log(JSON.parse(value));
            }
        });
    }


    getByType = () => {
        if(document.getElementById("categories_2").value === 'Alcohol') {
            database.map((value, index) => {
                if(JSON.parse(value).categories === "Alcohol") {
                    console.log(JSON.parse(value));
                }
            });
        }

        else if(document.getElementById("categories_2").value === 'Milk') {
            database.map((value, index) => {
                if(JSON.parse(value).categories === "Milk") {
                    console.log(JSON.parse(value));
                }
            });
        }

        else if(document.getElementById("categories_2").value === 'Chocolate') {
            database.map((value, index) => {
                if(JSON.parse(value).categories === "Chocolate") {
                    console.log(JSON.parse(value));
                }
            });
        }

        else if(document.getElementById("categories_2").value === 'Vegetables') {
            database.map((value, index) => {
                if(JSON.parse(value).categories === "Vegetables") {
                    console.log(JSON.parse(value));
                }
            });
        }

        else if(document.getElementById("categories_2").value === 'Fruits') {
            database.map((value, index) => {
                if(JSON.parse(value).categories === "Fruits") {
                    console.log(JSON.parse(value));
                }
            });
        }

}

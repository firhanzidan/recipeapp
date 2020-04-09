
        function createNode(element) {
          // Declare variables
        //   var input, filter, ul, a, i, txtValue;
        //   input = document.getElementById('myInput');
        //   filter = input.value.toUpperCase();
        //   const ul = document.getElementById("results");
        //   const li = ul.getElementsById('li');
        
        //   // Loop through all list items, and hide those who don't match the search query
        //   for (i = 0; i < li.length; i++) {
        //     a = li[i].getElementsByTagName("a")[0];
        //     txtValue = a.textContent || a.innerText;
        //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //       li[i].style.display = "";
        //     } else {
        //       li[i].style.display = "none";
        //     }
        //   }
            return document.createElement(element);
            
        }
        function append(parent, el){
            return parent.appendChild(el);
        }
        const ul = document.getElementById("results")
        const url ="https://recipe-puppy.p.rapidapi.com/?p=1"
        const settings = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
                "x-rapidapi-key": "d13c7f3e13msh1a4343ebe32f69ep154877jsn03ae256573ef"
            }
        }

        fetch(url, settings)
        .then(response => response.json())
        .then(function(data){
            let test = data.results;
            return test.map(function(test){

                let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');

                img.src=test.thumbnail;
                span.innerHTML=`${test.ingredients}
                ${test.title} ${test.href}`

                append(li, img);
                append(li, span);
                append(ul, li);

            })
        })
        // .catch(function(error){
        //     console.log(alert("test"));
        // });

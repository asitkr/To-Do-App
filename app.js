function add_item() {

    let text = document.getElementById("text");
    let list_item = document.getElementById("list_item");

    if(text.value != ""){
        let make_list = document.createElement("li");
        make_list.appendChild(document.createTextNode(text.value));

        list_item.appendChild(make_list);

        text.value = "";

        make_list.onclick = function() {
            this.parentNode.removeChild(this);
        }
    }
    else{
        document.write("Add some text to it.");
    }
}
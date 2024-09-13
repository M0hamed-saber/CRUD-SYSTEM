var BookmarkName = document.getElementById("BookmarkName");
var BookmarkUrl = document.getElementById("BookmarkUrl");

var BookmarkList = [];

if (localStorage.getItem("BookmarkContainer") !== null) {
    BookmarkList = JSON.parse(localStorage.getItem("BookmarkContainer"));
    displayData();
}

function Submit() {
    var Bookmark = {
        name: BookmarkName.value,
        url: BookmarkUrl.value
    };

    BookmarkList.push(Bookmark);
    localStorage.setItem("BookmarkContainer", JSON.stringify(BookmarkList));
    displayData();
    ClearForm();
    console.log(BookmarkList);
}

function ClearForm() {
    BookmarkName.value = "";
    BookmarkUrl.value = "";
}

function displayData() {
    var cartona = "";
    for (var i = 0; i < BookmarkList.length; i++) {
        cartona += `<tr>
                    <td>${i}</td>
                    <td>${BookmarkList[i].name}</td>
                    <td><a class="btn btn-warning w-25" href="${BookmarkList[i].url}" target="_blank">Visit</a></td>
                    <td><button class="btn btn-danger w-25" onclick="deleteItem(${i})">Delete</button></td>
                    </tr>`;
    }
    document.getElementById("tableData").innerHTML = cartona;
}

function deleteItem(indexItem) {
    BookmarkList.splice(indexItem, 1);
    localStorage.setItem("BookmarkContainer", JSON.stringify(BookmarkList));
    displayData();
}

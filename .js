const DOMselectors = {
    box: document.getElementById("questions"),
    input1: document.getElementById(input1),
    input2: document.getElementById(input2),
    input3: document.getElementById(input3),
    gizmo: document.getElementById(gizmo),
    Objname: document.getElementById(Objname),
    Objage: document.getElementById(Objage),
}
 DOMselectors.gizmo.addEventListener("click",function () {
    let name = DOMselectors.input1.value;
    let age = DOMselectors.input2.value;
    let fvcr = DOMselectors.input3.value;
    const profile = {
        name:' ${name}' ,
        age: '${age}',
        fvcr: '${fvcr}',
    };
    insert (profile.name, profile.age, profile.fvcr);
    createreseter();
    clear();
 });
 function clear() {
 DOMselectors.input1.value = "";
 DOMselectors.input2.value = "";
 DOMselectors.input3.value = "";

 }

 function inject (name,age,fvcr) 

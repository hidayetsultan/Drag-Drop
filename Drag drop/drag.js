const draggables=document.querySelectorAll(".task");
const droppables=document.querySelectorAll(".swim-lane")

draggables.forEach((task) => {
    task.addEventListener("dragstart", () => {
        task.classlist.add("is-dragging");

    });
    task.addEventListener("dragend", () => {
        task.classlist.remove("is-dragging");

    });

});
droppables.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();

        const buttomTask = insertAboveTask(zone, e.clientY);
        const curTask = document.querySelector(".is-dragging");
       if(!bottomTask){
        zone.appendChild(curTask);
       } else{
        zone.insertBefore(curTask, bottomTask);

       };

    });
});

const insertAboveTask=(zone,mouseY) =>{
    const els=zone.querySelectorAll(".task:not(.is-dragging)");
let closestTask = null;
let closestOffset=Number.NEGATIVE_INFINITY;
els.forEach((task) => {
const{top}=task.getBoundingClientRect();
const offset = mouseY - top;
if (offset < 0 && offset > closestOffset) {
    closestOffset = offset;
    closestTask = task;

}
});
return closestTask;

};



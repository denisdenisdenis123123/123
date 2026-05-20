document.addEventListener("DOMContentLoaded", () => {
    const dateE1 = document.getElementById("datums");
    const smallE1 = document.getElementById("smallTemp");
    const highE1 = document.getElementById("highTemp");
    const body = document.querySelector("body");
    const summaryE1 = document.querySelector("span")
    const addBtn = document.querySelector("onclick")
    if (!dateE1 || !smallE1 || !highE1){
        console.warn("Trukst kāds no obligātajiem elementiem.");
        return;
    }
    addBtn.addEventListener("click", async (e) => {
        const date = (dateE1.value || "").trim();
        const small = parseFloat(smallE1.value);
        const high = parseFloat(highE1.value);
        const err = validateInput(date,small,high);
        if (err) {
            alert(err);
            return;
        }
        const newRecord = {date, small, high};
        records.push(newRecord);
        renderTable(tbody,records);
        renderOverallAverage(avg_summary, records);
        form.reset();


        
    });
    function validateInput (date,small,high);
    if (!date) return "ludzu ievadi datumu."

})
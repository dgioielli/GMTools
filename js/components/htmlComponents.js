export const newLabel = (className, labelText, labelFor) => {
    const label = document.createElement("label");
    label.setAttribute("for", labelFor);
    label.classList.add(className);
    label.textContent = labelText;
    return label;
}

export const newInput = (className, id, type, value = "") => {
    const input = document.createElement("input");
    if (id != "") input.setAttribute("id", id);
    if (value != "") input.setAttribute("value", value);
    input.setAttribute("type", type);
    input.classList.add(className);
    return input;
}

export const newOption = ({ value, content }) => {
    const option = document.createElement("option");
    option.setAttribute("value", value);
    option.textContent = content;
    return option;
}

export const newDataList = (id, options) => {
    const dataList = document.createElement("datalist");
    dataList.setAttribute("id", id);
    options.forEach(option => {
        dataList.appendChild(newOption(option));
    });
    return dataList;
}
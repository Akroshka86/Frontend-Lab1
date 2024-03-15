var obj = {};

function addProperty() 
{
    var keyInput = document.getElementById('key').value;
    var firstNameInput = document.getElementById('firstName').value;

    // Сохраняем значения Фамилии, Имени и Группы отдельно
    obj[keyInput] = firstNameInput


    // Очищаем поля ввода
    document.getElementById('key').value = '';
    document.getElementById('firstName').value = '';
    console.log(obj);
}

function extractValue() 
{
    var requestedKey = document.getElementById('requestedKey').value;
    var extractedValue = obj[requestedKey];
    if (extractedValue !== undefined) 
    {
        // Выводим каждое поле отдельно
        document.getElementById('key1').textContent = `${requestedKey}`;
        document.getElementById('firstName1').textContent = `${extractedValue}`;
        
    } 
    else {
        document.getElementById('key1').textContent = `Ключ не найден в объекте.`;
        document.getElementById('firstName1').textContent = '';
    }
    document.getElementById('requestedKey').value = '';
}

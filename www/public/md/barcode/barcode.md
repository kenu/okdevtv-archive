# Barcode

* https://github.com/lindell/JsBarcode

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Barcode Generator</title>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/jsbarcode@3.8.0/dist/JsBarcode.all.min.js"></script>
    <script>
        $(document).ready(init);

        function init() {
            JsBarcode("#barcode", "HelloNature");

            $('#barcodeno').on('keyup', generate);
            $('form').on('submit', function() {
                return false;
            })

            var search = location.search.split('=');
            if (search.length > 1) {
                var code = location.search.split('=')[1];
                JsBarcode("#barcodeimg", code);
                $('#barcodeno').val(code);
            }
        }

        function generate(e) {
            var number = $('#barcodeno').val();
            JsBarcode("#barcodeimg", number);
        }
    </script>
</head>

<body>
    <div id="wrap" style="width:300px; margin:auto;">
        <img id="barcode" />
        <form style="width:300px; text-align: center;">
            <input type="number" name="barcodeno" id="barcodeno" placeholder="numbers only">
            <input type="reset" name="reset" value="reset">
            <br />
            <img id="barcodeimg" />
        </form>
    </div>

</body>

</html>
```


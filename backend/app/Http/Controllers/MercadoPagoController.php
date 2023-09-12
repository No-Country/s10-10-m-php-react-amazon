<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use MercadoPago\Preference;
use MercadoPago\Item;

class MercadoPagoController extends Controller
{
    public function createPreference(Request $request)
    {
        // Reemplaza "YOUR_ACCESS_TOKEN" con tu propio token de acceso de MercadoPago
        \MercadoPago\SDK::setAccessToken(config('services.mercadopago.token'));

        // Obtén los datos JSON enviados desde el front-end
        $orderData = $request->json()->all();
        dd($orderData);

        // Crea una preferencia de pago
        $preference = new Preference();

        // Crea un item para la preferencia
        $item = new Item();
        $item->title = $orderData['description'];
        $item->quantity = $orderData['quantity'];
        $item->unit_price = $orderData['price'];

        // Agrega el item a la preferencia
        $preference->items = [$item];

        // Configura las URLs de retroalimentación
        $preference->back_urls = [
            "success" => "https://s10-10-m-php-react.onrender.com",
            "failure" => "https://s10-10-m-php-react.onrender.com",
            "pending" => "https://s10-10-m-php-react.onrender.com"
        ];

        // Configura el método de auto retorno
        $preference->auto_return = "approved";

        // Guarda la preferencia
        $preference->save();

        // Devuelve la ID de la preferencia como respuesta JSON
        return response()->json(['preference_id' => $preference->id]);
    }
}

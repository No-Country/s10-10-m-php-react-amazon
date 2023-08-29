<?php

namespace App\Services;

use Cloudinary\Uploader;

class CloudinaryService
{
    public function uploadImage($uploadedFile)
    {
        return Uploader::upload($uploadedFile->getRealPath());
    }
}
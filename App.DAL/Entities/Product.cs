using System;
using System.Collections.Generic;

namespace App.DAL.Entities;

public partial class Product
{
    public Guid Id { get; set; }


    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public decimal Price { get; set; }

    public string Img { get; set; } = null!;
    

}

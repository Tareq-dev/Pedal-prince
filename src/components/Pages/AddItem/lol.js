<form onSubmit={handleSubmit(onSubmit)} className="w-3/4">
        <h3 className="text-center text-3xl">Add Item</h3>
        <input
          value={user.email}
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          {...register("email", { required: true, maxLength: 20 })}
          readOnly
        />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Enter Product Name"
        />
        <br />
        <textarea
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          {...register("description")}
          placeholder="Enter product description"
        />
        <br />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          placeholder="Enter product price"
          type="number"
          {...register("price")}
        />
        <br />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          type="number"
          {...register("qty")}
          placeholder="Enter product quantity"
        />
        <br />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          type="text"
          {...register("supplier")}
          placeholder="Supplier name"
        />
        <br />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          type="text"
          {...register("img")}
          placeholder="Enter photoURL"
        />
        <br />
        <div className="flex justify-center">
          <button type="submit" className="bg-sky-400 w-full py-2">Add Item</button>
        </div>
      </form>
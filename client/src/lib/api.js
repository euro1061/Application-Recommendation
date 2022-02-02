const DOMAIN = "http://localhost:5000";


export async function getAll() {
  const response = await fetch(`${DOMAIN}/application`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function getRecommend(dataJSON) {
  const response = await fetch(`${DOMAIN}/application_recom`, {
    method: "POST",
    body: JSON.stringify(dataJSON),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function getOne(id) {
  const response = await fetch(`${DOMAIN}/application_fetchone?id=${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

/* export async function getAllProduct() {
  const response = await fetch(`${DOMAIN}/product`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
} */

/* export async function AddProduct(dataProduct) {
  const response = await fetch(`${DOMAIN}/product`, {
    method: "POST",
    body: JSON.stringify(dataProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function DeleteProduct(dataProduct) {
  const response = await fetch(`${DOMAIN}/product`, {
    method: "DELETE",
    body: JSON.stringify(dataProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function RegsiterAPI(dataUsers) {
  const response = await fetch(`${DOMAIN}/register`, {
    method: "POST",
    body: JSON.stringify(dataUsers),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}

export async function LoginAPI(dataUsers) {
  const response = await fetch(`${DOMAIN}/login`, {
    method: "POST",
    body: JSON.stringify(dataUsers),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
} */
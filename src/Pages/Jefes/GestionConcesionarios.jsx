import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  get_concesionarios,
  create_concesionarios,
  update_concesionarios,
  delete_concesionarios,
} from "../../api/concesionarios";

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.0

-- Started on 2024-06-07 12:18:25

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

-- CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4874 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 233 (class 1255 OID 16398)
-- Name: create_invoice(text, numeric, date); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.create_invoice(IN customer_name text, IN total_amount numeric, IN invoice_date date)
    LANGUAGE plpgsql
    AS $$
BEGIN
  INSERT INTO invoices (customer_name, total_amount, invoice_date)
  VALUES (customer_name, total_amount, invoice_date);
END;
$$;


ALTER PROCEDURE public.create_invoice(IN customer_name text, IN total_amount numeric, IN invoice_date date) OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;


--
-- TOC entry 227 (class 1259 OID 16433)
-- Name: provinces; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provinces (
    name character varying(100),
    full_name character varying(150),
    latitude double precision,
    longitude double precision,
    display_order integer,
    id integer NOT NULL
);


ALTER TABLE public.provinces OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16436)
-- Name: provinces_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provinces_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.provinces_id_seq OWNER TO postgres;

--
-- TOC entry 4880 (class 0 OID 0)
-- Dependencies: 228
-- Name: provinces_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provinces_id_seq OWNED BY public.provinces.id;


-- TOC entry 4688 (class 2604 OID 16449)
-- Name: provinces id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinces ALTER COLUMN id SET DEFAULT nextval('public.provinces_id_seq'::regclass);


--
-- TOC entry 4863 (class 0 OID 16433)
-- Dependencies: 227
-- Data for Name: provinces; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.provinces VALUES ('Buenos Aires', 'Buenos Aires', -34.6037, -58.3816, 1, 1);
INSERT INTO public.provinces VALUES ('Catamarca', 'Catamarca', -28.4696, -65.7852, 2, 2);
INSERT INTO public.provinces VALUES ('Chaco', 'Chaco', -26.8406, -60.7658, 3, 3);
INSERT INTO public.provinces VALUES ('Chubut', 'Chubut', -43.3002, -65.1023, 4, 4);
INSERT INTO public.provinces VALUES ('Córdoba', 'Córdoba', -31.4201, -64.1888, 5, 5);
INSERT INTO public.provinces VALUES ('Corrientes', 'Corrientes', -27.4691, -58.8309, 6, 6);
INSERT INTO public.provinces VALUES ('Entre Ríos', 'Entre Ríos', -32.0575, -59.0844, 7, 7);
INSERT INTO public.provinces VALUES ('Formosa', 'Formosa', -26.1852, -58.1752, 8, 8);
INSERT INTO public.provinces VALUES ('Jujuy', 'Jujuy', -24.1858, -65.2995, 9, 9);
INSERT INTO public.provinces VALUES ('La Pampa', 'La Pampa', -36.6167, -64.2833, 10, 10);
INSERT INTO public.provinces VALUES ('La Rioja', 'La Rioja', -29.4111, -66.8507, 11, 11);
INSERT INTO public.provinces VALUES ('Mendoza', 'Mendoza', -32.8895, -68.8458, 12, 12);
INSERT INTO public.provinces VALUES ('Misiones', 'Misiones', -27.4676, -55.8977, 13, 13);
INSERT INTO public.provinces VALUES ('Neuquén', 'Neuquén', -38.9526, -68.0591, 14, 14);
INSERT INTO public.provinces VALUES ('Río Negro', 'Río Negro', -41.1335, -71.3103, 15, 15);
INSERT INTO public.provinces VALUES ('Salta', 'Salta', -24.7859, -65.4117, 16, 16);
INSERT INTO public.provinces VALUES ('San Juan', 'San Juan', -31.5375, -68.5364, 17, 17);
INSERT INTO public.provinces VALUES ('San Luis', 'San Luis', -33.3016, -66.3378, 18, 18);
INSERT INTO public.provinces VALUES ('Santa Cruz', 'Santa Cruz', -50, -69, 19, 19);
INSERT INTO public.provinces VALUES ('Santa Fe', 'Santa Fe', -31.6107, -60.6973, 20, 20);
INSERT INTO public.provinces VALUES ('Santiago del Estero', 'Santiago del Estero', -27.7951, -64.2615, 21, 21);
INSERT INTO public.provinces VALUES ('Tierra del Fuego', 'Tierra del Fuego', -54.8, -68.3, 22, 22);
INSERT INTO public.provinces VALUES ('Tucumán', 'Tucumán', -26.8083, -65.2176, 23, 23);

--
-- TOC entry 4888 (class 0 OID 0)
-- Dependencies: 228
-- Name: provinces_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provinces_id_seq', 1, false);

--
-- TOC entry 4704 (class 2606 OID 16465)
-- Name: provinces provinces_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provinces
    ADD CONSTRAINT provinces_pkey PRIMARY KEY (id);

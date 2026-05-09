import { Request, Response } from 'express';
import { db } from '../config/database';

export const getPrograms = async (req: Request, res: Response) => {
  try {
    const result = await db.query(
      `SELECT p.*, c.name as category_name 
       FROM programs p 
       LEFT JOIN categories c ON p.category_id = c.id 
       WHERE p.is_active = true 
       ORDER BY p.order ASC`
    );
    res.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Error fetching programs:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data program',
    });
  }
};

export const getProgramById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await db.query(
      `SELECT p.*, c.name as category_name 
       FROM programs p 
       LEFT JOIN categories c ON p.category_id = c.id 
       WHERE p.id = $1 AND p.is_active = true`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Program tidak ditemukan',
      });
    }

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error fetching program:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data program',
    });
  }
};

export const getNews = async (req: Request) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    
    const result = await db.query(
      `SELECT n.*, u.name as author_name 
       FROM news n 
       LEFT JOIN users u ON n.author_id = u.id 
       WHERE n.is_published = true 
       ORDER BY n.published_at DESC 
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    const countResult = await db.query(
      'SELECT COUNT(*) FROM news WHERE is_published = true'
    );

    return {
      success: true,
      data: result.rows,
      total: parseInt(countResult.rows[0].count),
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getNewsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await db.query(
      `SELECT n.*, u.name as author_name 
       FROM news n 
       LEFT JOIN users u ON n.author_id = u.id 
       WHERE n.id = $1 AND n.is_published = true`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Berita tidak ditemukan',
      });
    }

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data berita',
    });
  }
};

export const getGallery = async (req: Request, res: Response) => {
  try {
    const { category, limit = 20, offset = 0 } = req.query;
    
    let query = `SELECT * FROM gallery WHERE 1=1`;
    const params: any[] = [];
    
    if (category) {
      query += ` AND category = $${params.length + 1}`;
      params.push(category);
    }
    
    query += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);
    
    const result = await db.query(query, params);

    res.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data galeri',
    });
  }
};

export const getFAQs = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    
    let query = `SELECT * FROM faqs WHERE 1=1`;
    const params: any[] = [];
    
    if (category) {
      query += ` AND category = $${params.length + 1}`;
      params.push(category);
    }
    
    query += ` ORDER BY order ASC`;
    
    const result = await db.query(query, params);

    res.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data FAQ',
    });
  }
};
